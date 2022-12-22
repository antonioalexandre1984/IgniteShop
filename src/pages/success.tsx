/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { SuccessContainer, ImageContainer } from "../styles/pages/success";
import Image from 'next/image'

interface SuccessProps {
    product: {
        name: string;
        imageUrl: string;
        customerName: string;
    }

}

export default function Sucess({ product }: SuccessProps) {

    return (
        <SuccessContainer>
            <h1>Compra realizada com sucesso!</h1>
            <ImageContainer>
                <Image src={product.imageUrl} width={120} height={120} alt="" />            </ImageContainer>
            <p>Uhuul <strong>{product.customerName}</strong>, sua <strong>{product.name}</strong><br />
                the Limits já está a caminho da sua casa. </p>
            <Link href='/'>
                Voltar ao catalogo
            </Link>
        </SuccessContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const sessionId = query.session_id as string
    console.log(query)
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items.data.price.product', 'line_items', 'customer_details']
    })
    console.log(session)
    const customerName = session.customer_details.name as string;
    const product = session.line_items.data[0].price.product as Stripe.Product;


    return {
        props: {
            product: {
                customerName,
                name: product.name,
                imageUrl: product.images[0],
            }
        }
    }

}