export default function Application() {
    return (
        <>
        <h1>Job Application Form</h1>
        <h2>Section 1</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" /> {/* getRoleBy("textbox") */}
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" name="bio" /> {/* getRoleBy("textbox") */}
                </div>
                <div>
                    <label htmlFor="job-location">Job location</label>
                    <select id="job-location"> {/* drop down menu getRoleBy("combobox") */}
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms" /> I agree to the terms and conditions {/* checkbox */}
                    </label>
                </div>
                <button>Submit</button> {/*  */}
            </form>
        </>
    )
}