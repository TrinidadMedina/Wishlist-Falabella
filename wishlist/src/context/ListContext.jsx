import React, { useState, createContext } from 'react';
import { db } from '../firebase/config'
import { collection, query, onSnapshot, orderBy, updateDoc, getDoc, doc, arrayUnion, arrayRemove, deleteDoc, Timestamp, addDoc} from 'firebase/firestore'

export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {

    const [lists, setLists] = useState([]);
    const [list, setList] = useState([]);

    const createList = (name) => {
		addDoc(collection(db, 'lists'), {
			date: Timestamp.fromDate(new Date()),
			name: name,
			products: [],
			userId: 'JuanaPerez1234',
		});
	};

    const getLists = () => {
        const q = query(collection(db, 'lists'), orderBy('date', 'desc'));
        onSnapshot(q, (data) => {
            return setLists(data.docs.map((list) => {
                return ({ ...list.data(), docId: list.id })
            }))
        })
    };

    const getList = async (id) => {
        const result = await getDoc(doc(db, "lists", id));
        return setList({...result.data(), docId : result.id})
    };

    const addProduct = (id, product) => {
        updateDoc(doc(db, "lists", id), {
            products: arrayUnion(product)
        })
    }

    const deleteProduct = (id, product) =>{
        console.log(product)
        updateDoc(doc(db, "lists", id), {
            products: arrayRemove(product)
        });

    }

    const deleteList = (id) =>{
        deleteDoc(doc(db, "lists", id));
    }

    const editList = (id, name) =>{
        updateDoc(doc(db, "lists", id), {
            name
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
            createList
        }}>
            {children}
        </ListContext.Provider>
    )
}
