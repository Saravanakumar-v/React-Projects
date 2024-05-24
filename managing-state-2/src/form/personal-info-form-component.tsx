

export function PersonalInfoFormComponent() {

    

    return (
        <>
            <div className="profile-info">
                <div className="profile-info_header">
                    <h1>Personal Info</h1>
                    <div>Please provide your name, email address, and phone number.</div>
                </div>
                <form className="profile-info_form">
                    <div className="form-inpt">
                        <label>Name</label>
                        <input className="inpt" placeholder="e.g. Stephen King"></input> 
                    </div>
                    <div className="form-inpt">
                        <label>Email Address</label>
                        <input className="inpt" placeholder="e.g. stephenking@lorem.com"></input>
                    </div>
                    <div className="form-inpt">
                        <label>Phone Number</label>
                        <input className="inpt" placeholder="e.g. +1 234 567 890"></input>
                    </div>
                </form>
            </div>
        </>
    );
}