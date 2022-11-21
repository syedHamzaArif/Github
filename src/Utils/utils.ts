import { Octokit } from "octokit";
import { personalToken } from "../Config/config";

const octokit = new Octokit({ auth: personalToken })

export const getGitHubUser = async () => {
    try {
        const res = await octokit.rest.users.getAuthenticated()
        return res.data
    } catch(err) {
        throw err
    }
}

export const getUserRepos = async () => {
    try {
        const res = await octokit.request('GET /user/repos{?visibility,affiliation,type,sort,direction,per_page,page,since,before}', {})
        return res.data
    } catch(err) {
        throw err
    }
}