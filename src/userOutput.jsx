
export default function UserOutput ({Username}){
    // the 'username' is the prop i am passing an it has been destructured
    return(
       <div className='div'> 
       {/* div container that carries the p tag with the content */}
       <p>
        <h1>My name is <span>{Username}</span> and i am a Software developer. </h1>
       </p>

        
       </div>
    );
}