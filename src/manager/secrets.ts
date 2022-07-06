let secrets = {
	CONN: process.env.CONN,
	SENDGRID: process.env.SENDGRID,
}

const retrieveSecrets = async () => {

	secrets = { ...secrets }



}

export { secrets }


export default retrieveSecrets;