export default function PseudoProfile() {
    return(
        <div className="bg-bg w-full  p-6 rounded-xl">
            <h1 className="text-white text-3xl">Profile</h1>
            <div className="flex gap-4 mt-4">
                <div className="w-1/2">
                    <h2 className="text-white text-xl">Name:</h2>
                    <p className="text-white">John Doe</p>
                </div>
                <div className="w-1/2">
                    <h2 className="text-white text-xl">Email:</h2>
                    <p className="text-white"></p>
                </div>  
            </div>
        </div>
    )
}