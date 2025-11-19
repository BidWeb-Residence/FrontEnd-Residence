const fetchSqlMap = async (payload: { url: string }): Promise<any> => {
  try {
    const response = await fetch("http://localhost:8000/scan/sql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Erro ao chamar a API");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetchSqlMap;
