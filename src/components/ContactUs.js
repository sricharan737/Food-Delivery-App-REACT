const ContactUs = () => {
    return(
        <div>
            <h1 className="m-4 p-4 font-bold text-3xl">Welcom to Contact Us page</h1>
           
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="name" />
                <input type="text" className="border border-black p-2 m-2" placeholder="message" />
                <button className="border border-black-1 p-2 m-2 bg-slate-300 rounded-md font-semibold">Submit</button>
            </form>
        </div>
    )
};

export default ContactUs;