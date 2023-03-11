const Delay = (ms) => {
    return (new Promise((resolve) => setTimeout(resolve, ms, true)))
}

export const LoginServer = async (email, password) => {
    await Delay(3000)
    return (
        {
            email,
            id: 1231,
            name: `raka`,
            password
        }
    )
}