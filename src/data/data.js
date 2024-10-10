import katalog1 from '../assets/imgs/katalog1.svg'
import katalog2 from '../assets/imgs/katalog2.svg'
import katalog3 from '../assets/imgs/katalog3.svg'
import katalog4 from '../assets/imgs/katalog4.svg'
import katalog5 from '../assets/imgs/katalog5.svg'
import katalog6 from '../assets/imgs/katalog6.svg'
import katalog7 from '../assets/imgs/katalog7.svg'
import katalog8 from '../assets/imgs/katalog8.svg'
import katalog9 from '../assets/imgs/katalog9.svg'
import katalog10 from '../assets/imgs/katalog10.svg'
import katalog11 from '../assets/imgs/katalog11.svg'
import product_img from '../assets/imgs/xit_prodact.svg'
import stars from '../assets/imgs/stars.svg'
import product_info1 from '../assets/imgs/product_info1.svg'
import product_info2 from '../assets/imgs/product_info2.svg'
import percentage from '../assets/imgs/percentage_img.svg'
import balance from '../assets/imgs/balance.svg'
import { Like_icon } from '../assets/icons/like_icon'
import { Comment_icon } from '../assets/icons/comment_icon'
import { Statistic_icon } from '../assets/icons/statistic_icon'
import { Cart_icon } from '../assets/icons/cart_icon'






const datas = {
    katalog: [
        {
            id: "1",
            img: katalog1,
            title: "Гироскутеры"
        },
        {
            id: "2",
            img: katalog2,
            title: "Электросамокаты"
        },
        {
            id: "3",
            img: katalog3,
            title: "Моноколеса"
        },
        {
            id: "4",
            img: katalog4,
            title: "Сигвеи и мини-сигвеи"
        },
        {
            id: "5",
            img: katalog5,
            title: "Электроскутеры"
        },
        {
            id: "6",
            img: katalog6,
            title: "Электровелосипеды"
        },
        {
            id: "7",
            img: katalog7,
            title: "Электроскейты"
        },
        {
            id: "8",
            img: katalog8,
            title: "Электромобили"
        },
        {
            id: "9",
            img: katalog9,
            title: "Аксессуары"
        },
        {
            id: "10",
            img: katalog10,
            title: "Умные игрушки"
        },
        {
            id: "11",
            img: katalog11,
            title: "Smart Watch"
        },
    ],


    xit_products: [
        {
            id: "1",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "2",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "3",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            price: "13 690 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "4",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
    ],

    new_products: [
        {
            id: "1",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "2",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "3",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            price: "13 690 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "4",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
    ],

    product_info: [
        {
            id: 1,
            discription: "Скидки дo 30% на сигвеи",
            img: product_info1
        },
        {
            id: 2,
            discription: "Неделя смарт часов",
            img: product_info2
        },

    ],

    products_sigve: [
        {
            id: "1",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "2",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "3",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            price: "13 690 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "4",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
    ],

    products_monocolesa: [
        {
            id: "1",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "2",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "3",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            price: "13 690 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "4",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
    ],

    product_info_bottom: [
        {
            id: 1,
            discription: "Распродажа до — 50%",
            img: percentage
        },
        {
            id: 2,
            discription: "Smart Balance Premium по специальной цене",
            img: balance
        },

    ],

    products_velo: [
        {
            id: "1",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "2",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "3",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            price: "13 690 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
        {
            id: "4",
            img: product_img,
            avtor: "Сигвеи",
            discription: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
            stars: stars,
            // comment: <Comment_icon/>,
            commens_number: "(17)",
            old_price: "5400 ₽",
            price: "4990 ₽",
            sale: "20%",
            sale_price: "— 1 000 ₽",
            // like: <Like_icon/>,
            // statistic: <Statistic_icon/>,
            button_value: "Купить в 1 клик",
            // cart: <Cart_icon/>
        },
    ],

    product_read: [
        {
            id: 1,
            title: "Открытие нового магазина",
            discription: "Разнообразный и богатый опыт говорит нам, что консультация c широким активом требует от нас анализа анализа существующих паттернов поведения",
            see: "Подробнее",
            date: "05 июня 2021"
        },

        {
            id: 2,
            title: "Работа в праздничные дни",
            discription: "Принимая во внимание показатели успешности, социально-экономическое развитие играет определяющее значение для вывода текущих активов",
            see: "Подробнее",
            date: "05 июня 2021"
        },

    ],


}

export default datas;