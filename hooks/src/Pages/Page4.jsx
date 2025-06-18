import React, {useRef} from "react";

export default function Page4(props){
    const userForm = useRef()
    const userPass = useRef()

    const submitHandler = async (event) =>{
        event.preventDefault();
        console.log(`ref=`, userForm.current)
        console.log(`ref name =`, userForm.current.name)
        console.log(`ref value =`, userForm.current.value)
        console.log(`ref=`, userForm.current)
        console.log(`ref name=`, userForm.current.name)
        console.log(`ref value=`, userForm.current.value)
    }
    return(
        <div className="container">
            <h1>Page-4</h1>

            <div className="block">
                <form method="post"  onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="user">Enter Username</label>
                        <input type="text" name="user" id="user" className="form-item" ref={userForm} required />
                    </div>

                    <div>
                        <label htmlFor="pass">Enter Password</label>
                        <input type="password" name="pass" id="pass" className="form-item" ref={userPass} required />
                    </div>

                    <div>
                        <input type="submit" value="Register" className="btn success" />
                    </div>
                </form>
            </div>
        </div>
    )
}
