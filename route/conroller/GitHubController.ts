// import axios from "axios";
import {Request, Response} from 'express';

export class GitHubController {

    /**
     * @param {Request} req
     * @param {Response} res
     */
    public static postAction(req: Request, res: Response) {

        console.log(req.url);

        // const getGHRepoInfo = (owner: any, repoName: any) =>
        //     axios
        //         .get(`https://api.github.com/repos/${owner}/${repoName}`)
        //         .then(res => res.data);
        //
        // req.app.get('database')
        //     .fetchRepos()
        //     .then((repos: any) => {
        //         const reposGHInfo = [];
        //
        //         for (let i = 0; i < repos.length; i++) {
        //             reposGHInfo.push(getGHRepoInfo(repos[i].owner, repos[i].name));
        //         }
        //
        //         return Promise.all(reposGHInfo);
        //     })
        //     .then((reposInfo: any) => {
        //         const result = [];
        //
        //         for (let i = 0; i < reposInfo.length; i++) {
        //             if (reposInfo[i].owner.login === userName) {
        //                 result.push({
        //                     userName,
        //                     repoName: reposInfo[i].name,
        //                     stars: reposInfo[i].stargazers_count
        //                 });
        //             }
        //         }
        //
        //     });

        res.status(200).send(req.url);
    }
}