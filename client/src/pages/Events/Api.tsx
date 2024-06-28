// import {useEffect} from "react";
// import axios from "axios";
// import {useSelector} from "react-redux";
// //import {selectorLoginToken} from "../../selectors";
// import {useNavigate} from "react-router-dom";


//const token = useSelector(selectorLoginToken);

//     // @ts-ignore
//     const userData = useSelector((state)=>state.login.userData)
//     const navigate=useNavigate();
//
// useEffect(() =>{
//

//     if (!userData){
//         navigate('/authorization');
//     } else {
        //        const token = localStorage.getItem("token")
        //
        //        axios.post('http://localhost:5000/api/event',{{
        //                title: "Концерт гурту Океан Ельзи",
        //                date: new Date("2024-07-15T19:30:00"),
        //                img: "https://example.com/concert_poster.jpg",
        //                city: "Київ",
        //                description: "Концерт до 30-річчя гурту",
        //                location: "НСК Олімпійський",
        //                available: 5000,
        //                bookedSeats: [], // Поки що немає заброньованих місць
        //                customer_id: "648f0e547c8768e698234567" // Приклад ID користувача з моделі Customer
        //            };})
        //
        //axios.delete('http://localhost:5000/api/event/666364902271f36b6e0e9a5c')

        //
        //        fetch('http://localhost:5000/api/event/id',{method: 'PUT',
        //
        //            // @ts-ignore
        //            headers: {
        //                'Content-Type': 'application/json;charset=utf-8',
        //                'Authorization':token,
        //            },
        //            body: JSON.stringify({})})
        //            .then((res)=>res.json())
        //
        //        fetch('http://localhost:5000/api/event/id',{method: 'GET',
        //
        //            // @ts-ignore
        //            headers: {
        //                'Content-Type': 'application/json;charset=utf-8',
        //                'Authorization':token,
        //            },
        //            body: JSON.stringify({})})
        //            .then((res)=>res.json())
//     }
//
// }, []);
