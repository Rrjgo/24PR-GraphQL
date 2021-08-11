import axios from "axios";

const getProjects = async () => {
  try {
    const { data } = await axios.get(
      "https://24pullrequests.com/projects.json"
    );
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

const getContributions = async () => {
  try {
    const { data } = await axios.get(
      "https://24pullrequests.com/pull_requests.json"
    );
    return data;
  }catch (err) {
    return Promise.reject(err);
  }
};


const getUsers = async () => {
  try {
    const { data } = await axios.get(
      "https://24pullrequests.com/users.json"
    );
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
 * Get user by user's nickname/github name
 */
const getUser = async (nickname) => {
  try {
    const { data } = await axios.get(
      `https://24pullrequests.com/users/${nickname}.json`
    );
    return data;
  } catch (err) {
    return Promise.reject(err);
  } 
}

const getOrganisations = async () => {
    try {
      const { data } = await axios.get(
        "https://24pullrequests.com/organisations.json"
      );
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const getOrganisation = async (organisation) => {
    try {
      const { data } = await axios.get(
        `https://24pullrequests.com/organisations/${organisation}.json`
      );
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };





export { getProjects, getContributions, getUsers, getUser, getOrganisations, getOrganisation};
