const KinForm = () => {
    return (
        <div>
            <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label>
                        Full Name:
                    </label>
                    <input type="text" name="name" className='p-2 border border-gray-400 rounded-lg outline-none'
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>
                        Relationship to Patient:
                    </label>
                    <input className='p-2 border border-gray-400 rounded-lg outline-none'
                        type="text" name="relationship" />
                </div>
                <div className="flex flex-col gap-2">
                    <label>
                        Tel:
                    </label>
                    <input className='p-2 border border-gray-400 rounded-lg outline-none'
                        type="tel" name="tel" />
                </div>
                <input className="bg-og-blue px-6 py-2 rounded-lg" type="submit" value="Add next of kin" />
            </form>
        </div>
    )
}

export default KinForm