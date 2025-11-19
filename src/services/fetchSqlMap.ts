const fetchSqlMap = async (payload: String): Promise<any> => {
    try {
        const response = await fetch("https://backend-residence.onrender.com/scan/sql", {
            method: "POST",
            body: JSON.stringify(payload)
        })

        if (!response.ok) {
            throw new Error("Erro ao chamar a API");
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default fetchSqlMap;