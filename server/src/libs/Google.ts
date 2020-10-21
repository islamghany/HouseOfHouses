import {google} from 'googleapis';

const auth = new google.auth.OAuth2(
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_SECRET_KEY,
	`${process.env.PUBLIC_API}/signin`
)

export const Google = {
	authUrl:auth.generateAuthUrl({
		access_type:"online",
		scope:[
		 'https://www.googleapis.com/auth/userinfo.email',
         'https://www.googleapis.com/auth/userinfo.profile'
		]
	}),
	signin:async (code:string)=>{
		const {tokens} = await auth.getToken(code)
		auth.setCredentials(tokens);
		const {data} = await google.people({
			version:"v1",
			auth
		}).people.get({
			resourceName:'people/me',
			personFields:'emailAddress,name,photos'
		})
		return {user:data}
	}
}