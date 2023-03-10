const API_URL = " v1";

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);

  const data = await response.json();

  return data;
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);

  const fetchedResponse = await response.json();
  return fetchedResponse.sort((a, b) => {
    return a.fligthNumber - b.fligthNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      body: JSON.stringify(launch),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch (err) {
    return { ok: false };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
