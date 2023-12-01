/**
 * This function is used to call the API.
 * @description
 *  You can use this function to call for the api to return a Promise (with a JSON body) and then
 * use it to do other thing.
 * @author Collin
 * @example
 * ExamService().then((response) => {/* Do your process here... /})
 * @returns a Promise
 * @version 1.0.0.0
 */
async function CallAPI(apiUrl) {
  try {
    return await fetch(apiUrl).then((res) => {
      return res.json();
    });
  } catch (error) {
    return error.message;
  }
}

export default CallAPI;

export async function getPoint(url, answer) {
  return await fetch(url, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: answer,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(
        `Fetch failed. Status:${response.status}. Message:${response.statusText}`
      );
    }
  });
}
