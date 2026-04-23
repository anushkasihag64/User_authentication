const verifyEmailTemplate = ({name,url})=>{
    return `

<P>Dear ${name}</P>
<p>Thank you for registring Binkeyit.</p>
<a href=${url} style="color:black;background :orange;margin-top : 10px,padding:20px,display:block">Verify Email</a>`;
}

export default verifyEmailTemplate