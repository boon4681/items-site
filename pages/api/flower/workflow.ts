const { Octokit } = require("@octokit/core");
import type { NextApiRequest, NextApiResponse } from 'next'
const date = new Intl.RelativeTimeFormat('en')

const time_format = (time: number) => {
    const u = [60, 60 * 60,24*60*60]
    const p = ['minutes', 'hours','days']
    let o = 'seconds'
    let t = time
    let j = 1
    for (const i in u) {
        if (Math.abs(time) > u[i]) {
            j = u[i]
            o = p[i]
        }
    }
    t/=j
    return date.format(Math.round(t), o as any)
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const octokit = new Octokit({
        auth: process.env['GH-TOKEN']
    })
    const gh_res = await octokit.request('GET /repos/boon4681/action-experiments/actions/runs')

    if (gh_res.status == 200) {
        const data = gh_res.data.workflow_runs.slice(0, 3).map((data: any) => {
            const ago = new Date(data.run_started_at).getTime() - Date.now()
            return {
                id: data.id,
                event: data.event,
                start_at: data.run_started_at,
                launched: time_format(ago/1000),
                name: data.name,
                status: data.status,
                conclusion: data.conclusion
            }
        })
        return res.status(200).json({
            status: 200,
            data: data
        })
    }

    return res.status(200).json({ status: 500, error: 'error to fetch github' })
}
