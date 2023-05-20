"use client"
import MainSection from "@/app/(site)/components/mainSection";
import useApi from "@/app/hooks/useApi";
import SecondSection from "@/app/(site)/components/secondSection";
import NewsLetterSection from "@/app/(site)/components/newsLetterSection";
import TestimonialSection from "@/app/(site)/components/testimonialSection";

export default function Page() {

    const {data, loading, error} = useApi(
        `/products?populate=*&[filters][type][$eq]=pierres`
    );

    const person = [
        {
            name: 'Maria Smantha',
            job: 'Web Developer',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
            image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg'
        },
        {
            name: 'Maria Random',
            job: 'Web Ingenieur',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
            image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(4).jpg'
        },
        {
            name: 'John Doe',
            job: 'Web Designer',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.',
            image: 'https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg'
        }
    ]

    const infos = [
        {
            title: 'Nos produits',
            subTitle: 'Huiles essentielles, huiles végétales et pierres naturelles',
            text: `Nous vous proposont une synergie unique d\'huiles végétales, d\'huiles essentielles et de pierres naturelles crée par nos soins 100% naturelles.
            et fabriqués en France.`
        },
        {
            title: 'Paiement',
            subTitle: 'Stripe Paiement sécurisé',
            text: `Grâce à Stripe, vos paiements sont sécurisés.
            Vous pouvez payer par carte bancaire, Apple Pay, Visa, Mastercard, Paypal, Google Pay.`
        },
        {
            title: 'Pourquoi nous ?',
            subTitle: 'A propos de nous',
            text: 'Pierrette Essentielle est dédiée au bien-être au naturel. Nous vous propose une synergie unique d\'huiles végétales, et de pierres naturelles pour soulager vos bobos du quotidien.'
        }
    ]

    if (!loading && !error && data !== null) return (
        <>
            {/* @ts-ignore */}
            <MainSection
                title="Bienvenue chez Pierrette,"
                subTitle="votre boutique en ligne dédiée au bien-être au naturel."
                text="Pierrette Essentielle est une boutique en ligne dédiée au bien-être au naturel. Fondée par Estelle, passionnée par les bienfaits des huiles essentielles et les pierres naturelles, Pierrette Essentielle vous propose une synergie unique d'huiles végétales, d'huiles essentielles et de pierres naturelles pour soulager vos bobos du quotidien."
                data={data}
            />
            <SecondSection infos={infos}/>
            <TestimonialSection person={person}/>
            <NewsLetterSection />
        </>
    )
}