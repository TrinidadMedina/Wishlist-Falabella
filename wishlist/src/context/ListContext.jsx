import React, { useState, createContext } from 'react';
import { db } from '../firebase/config'
import { collection, query, onSnapshot, orderBy, updateDoc, getDoc, doc, arrayUnion, arrayRemove, deleteDoc, Timestamp, addDoc, connectFirestoreEmulator} from 'firebase/firestore'

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {

    const [lists, setLists] = useState([]);
    const [list, setList] = useState([]);
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [loading, setLoading] = useState(true)


    const createList = (name, status) => {
		addDoc(collection(db, 'lists'), {
			date: Timestamp.fromDate(new Date()),
			name,
			products: [],
			userId: 'JuanaPerez1234',
            productsId: [],
            status
		});
	};

    const createListfromProduct = async (name, product, status) => {
		await addDoc(collection(db, 'lists'), {
			date: Timestamp.fromDate(new Date()),
			name,
			products: [],
			userId: 'JuanaPerez1234',
            productsId: [],
            status
		}).then((response)=>{
            updateDoc(doc(db, "lists", response.id), {
                products: arrayUnion(product),
                productsId: arrayUnion(product.productId)
            })
        })
	};

    const getLists = () => {
        const q = query(collection(db, 'lists'), orderBy('date', 'desc'));
        onSnapshot(q, (data) => {
            setLists(data.docs.map((list) => {
                return ({ ...list.data(), docId: list.id })
            }));
            setLoading(false)
        })
    };

    const getList = async (id) => {
        const result = await getDoc(doc(db, "lists", id));
        setList({...result.data(), docId : result.id});
        setLoading(false)
    };

    const addProduct = (id, product, productId) => {
        updateDoc(doc(db, "lists", id), {
            products: arrayUnion(product),
            productsId: arrayUnion(productId)
        })
    }

    const deleteProduct = (id, product, productId) =>{
        console.log(product)
        updateDoc(doc(db, "lists", id), {
            products: arrayRemove(product),
            productsId: arrayRemove(productId)
        });

    }

    const deleteList = (id) =>{
        deleteDoc(doc(db, "lists", id));
    }

    const editList = (id, name, status) =>{
        updateDoc(doc(db, "lists", id), {
            name,
            status
        });
    }

    return (
        <ListContext.Provider value={{
            lists,
            getLists,
            list,
            getList,
            addProduct,
            deleteProduct,
            deleteList,
            editList,
            createList,
            createListfromProduct,
            alert,
            setAlert,
            alertMessage,
            setAlertMessage,
            loading,
            setLoading
        }}>
            {children}
        </ListContext.Provider>
    )
}
