const api_url = "http://localhost:3000";

const getTasksApi = async function () {
  try {
    const result = await fetch(api_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    alert("Tasks could not be loaded");
  }
};

const postTaskApi = async function (data) {
  try {
    await fetch(api_url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    alert("Your task could not be added to the list");
  }
};

const removeTaskApi = async function (id) {
  try {
    await fetch(api_url + "/" + id, {
      method: "DELETE",
    });
  } catch (error) {
    alert("Your task could not be deleted");
  }
};
