"use client";

import Image from "next/image";
import { useState } from "react";


interface ContactModalProps {
  open:boolean;
  setOpen:(open:boolean)=>void;
}


export default function ContactModal({
  open,
  setOpen
}:ContactModalProps){


const [formData,setFormData]=useState({

name:"",
email:"",
company:"",
phone:"",
candidates:"",
mode:"",
message:""

});



const [loading,setLoading]=useState(false);



const handleSubmit=async(e:any)=>{

e.preventDefault();

setLoading(true);


try{

const response = await fetch("/api/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(formData)

});


const data=await response.json();


alert(data.message);


setOpen(false);


}

catch(error){

alert("Something went wrong");

}

finally{

setLoading(false);

}

};



if(!open) return null;



return(

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999] p-4">


<div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full overflow-hidden relative">


<button

onClick={()=>setOpen(false)}

className="absolute right-5 top-4 text-4xl text-gray-900 hover:text-red-600"

>
×
</button>



<div className="grid lg:grid-cols-2">


{/* IMAGE */}

<div className="bg-blue-50 flex items-center justify-center p-10">

<Image

src="/contact.png"

alt="Contact"

width={450}

height={450}

/>

</div>





{/* FORM */}

<div className="p-8">


<h2 className="text-4xl font-bold text-gray-950">

Enquire Now

</h2>


<p className="text-gray-700 mt-3 mb-6">

Tell us about your training requirements.

</p>




<form
onSubmit={handleSubmit}
className="space-y-4"
>



<input

required

placeholder="Full Name"

className="w-full border border-gray-400 rounded-xl p-3 text-gray-950"

onChange={(e)=>setFormData({
...formData,
name:e.target.value
})}

/>




<input

required

type="email"

placeholder="Email Address"

className="w-full border border-gray-400 rounded-xl p-3 text-gray-950"


onChange={(e)=>setFormData({
...formData,
email:e.target.value
})}

/>





<input

placeholder="Company Name"

className="w-full border border-gray-400 rounded-xl p-3 text-gray-950"


onChange={(e)=>setFormData({
...formData,
company:e.target.value
})}

/>





{/* Phone with Indian Flag */}

<div className="flex">


<div className="flex items-center gap-2 bg-gray-100 border border-gray-400 px-4 rounded-l-xl">

<span>
🇮🇳
</span>

<span className="text-gray-900 font-semibold">
+91
</span>

</div>


<input

type="tel"

placeholder="Phone Number"

className="w-full border border-gray-400 rounded-r-xl p-3 text-gray-950"


onChange={(e)=>setFormData({
...formData,
phone:e.target.value
})}

/>


</div>





{/* Candidates */}

<input

type="number"

placeholder="Number of Candidates"

className="w-full border border-gray-400 rounded-xl p-3 text-gray-950"


onChange={(e)=>setFormData({
...formData,
candidates:e.target.value
})}

/>





{/* Delivery Mode */}

<select

className="w-full border border-gray-400 rounded-xl p-3 text-gray-950"


onChange={(e)=>setFormData({
...formData,
mode:e.target.value
})}

>


<option value="">
Select Mode of Delivery
</option>


<option value="Online">
Online
</option>


<option value="Offline">
Offline
</option>


</select>





<textarea

rows={4}

placeholder="Your Message"

className="w-full border border-gray-400 rounded-xl p-3 text-gray-950"


onChange={(e)=>setFormData({
...formData,
message:e.target.value
})}


/>





<button

disabled={loading}

className="
w-full
bg-blue-600
text-white
py-4
rounded-xl
font-semibold
hover:bg-blue-700
transition
"


>

{

loading 
?
"Submitting..."
:
"Submit Enquiry"

}


</button>




</form>



</div>


</div>


</div>


</div>


)


}