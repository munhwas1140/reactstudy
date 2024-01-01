import React, {useState} from "react";

function SignUp(porps) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자")

    return (
        <form onSubmit={(event) => {
            alert(`이름: ${name}, 성별: ${gender}`);
            event.preventDefault();
        }}>
            <label>
                이름:
                <input type="text" 
                    value={name} 
                    onChange={(event) => {
                        setName(event.target.value);
                    }} />
            </label>
            <br />
            <label>
                성별:
                <select 
                    value={gender}
                    onChange={(event) => {
                        setGender(event.target.value);
                    }} 
                >
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;