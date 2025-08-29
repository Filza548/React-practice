function PropsComponent(props){
    return (
        <div>
            <h2>
                hello i'm learning props component in react js
            </h2>
            <h2>Name: {props.name}</h2>
            {/* <h3>Email : {props.email}</h3> */}
            {/* <h3>Salary : {props.info.salary} Mobile : {props.info.mobile}</h3> */}
        </div>
    )
}

export default PropsComponent ;