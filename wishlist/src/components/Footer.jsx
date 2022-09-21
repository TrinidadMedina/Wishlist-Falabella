import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"

export function Footer() {
  return (
    <div className="footer h-[320px]">
      <div className="flex justify-around w-full text-footerText mt-8">
        <div className="flex flex-col w-[239px]">
          <h1 className="text-white">SUSCRÍBETE A NUESTRO NEWSLETTER</h1>
          <p className="my-1 pl-2">Infórmate de lo último de Falabella. </p>
          <p className="pl-2">
            Nuestras ofertas y novedades directamente en tu e-mail.
          </p>
          <div>
            <input
              className="bg-inputFooter border-b-4 border-b-[#8fca02] m-2 h-8 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Ingresa tu E-mail "
            />

            <input
              className="bg-inputFooter border-b-4 border-b-[#8fca02] m-2 h-8 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Ingresa tu RUT "
            />
          </div>
          <div className="flex m-1 ">
            <input className="bg-black" type="checkbox" name="" id="" />
            <p className=" p-2">Acepto términos y condiciones</p>
          </div>
          <button className="bg-inputFooter h-8 w-40 rounded-md">
            REGISTRATE AQUI
          </button>
          <div className="flex justify-around w-[150px] text-base m-3">
            <a className="icons" href="https://www.facebook.com/falabellachile">
              <FontAwesomeIcon  icon={faFacebook} />
            </a>
            <a className="icons" href="https://twitter.com/FalabellaAyuda">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="icons" href="https://www.instagram.com/falabellacom_cl/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="icons" href="https://www.youtube.com/channel/UCMLH0vqjhCblKOjFVBG6IQw">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div>
          {" "}
          <h1 className="text-white">SERVICIO AL CLIENTE</h1>
          <ul className="m-2 py-4 leading-4">
            <li>Contáctanos </li>
            <li>
              ¿Por qué comprar en
              <br /> Falabella.com?
            </li>
            <li>Métodos y costos de envío</li>
            <li>Seguimiento de mi compra </li>
            <li>
              Consultar por tus documentos
              <br /> electrónicos
            </li>
            <li>Cambios y devoluciones</li>
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
            <li>Política de cookies</li>
            <li>Control de suscripciones</li>
          </ul>
        </div>
        <div>
          {" "}
          <p className="text-white">MÁS FALABELLA</p>
          <ul className="m-2 py-4 leading-4">
            <li>¿Como vender en Falabella.com?</li>
            <li>Nuestro empresa</li>
            <li>Inversionistas</li>
            <li>Proveedores</li>
            <li>Fpay</li>
            <li>Venta empresa</li>
            <li>Trabaja con nosotros</li>
            <li>Club Deco</li>
            <li>Club Bebé</li>
            <li>Novios Falabella</li>
            <li>Celebraciones</li>
            <li>Canal de integridad</li>
            <li>Integrity Channel</li>
          </ul>
        </div>
        <div>
          {" "}
          <h1 className="text-white">EMPRESAS FALABELLA</h1>
          <ul className="m-2 py-4 leading-">
            <li>Falabella TV</li>
            <li>CMR Falabella</li>
            <li>Banco Falabella</li>
            <li>Viajes Falabella</li>
            <li>Seguros Falabella</li>
            <li>Sodimac</li>
            <li>Homy</li>
            <li>Tottus</li>
            <li>Linio</li>
            <li>Mall Plaza</li>
            <li>Otras Empresas Falabella</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
