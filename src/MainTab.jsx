import Card from "./Card";
import Card1 from "./Card1";

export default function MainTab(){
    let data1={
        name:"Ajay",
        course:"Dm",
        id:18763
    }
    let data2={
        name:"Abhay",
        course:"Dm",
        id:18763
    }
    let data3={
        name:"Arjun",
        course:"Dm",
        id:18763
    }
    let data4={
        name:"Ajay",
        course:"Dm",
        id:18763
    }
    let data5={
        name:"Ajay",
        course:"Dm",
        id:18763
    }
    let data6={
        name:"Ajay",
        course:"Dm",
        id:18763
    }
    let data7={
        name:"Ajay",
        course:"Dm",
        id:18763
    }
    let data8={
        name:"Ajay",
        course:"Dm",
        id:18763
    }
    let data9={
        name:"Ajay",
        course:"Dm",
        id:18763
    }
    let data10={
        name:"Ajay",
        course:"Dm",
        id:18763
    }
    let data11={
        name:"Ajay",
        course:"Dm",
        id:18763
    }


    let name="Ayush"
    let name1="Ashish"
    let name2="Arjun"
    return(
        <div>
            <h1>Details Of Student</h1>
           <Card detail={data1}/>
           <Card detail={data2}/>
           <Card detail={data3}/>
           <Card detail={data4}/>
           <Card detail={data5}/>
           <Card detail={data6}/>
           <Card detail={data7}/>
           <Card detail={data8}/>
           <Card detail={data9}/>
           <Card detail={data10}/>
           <Card detail={data11}/>
            <Card1 n={name}/>
            <Card1 n/>
            <Card1 n/>
            <Card1 n/>
            <Card1 n={name1}/>
            <Card1 n={name2}/>

        </div>
    )
}