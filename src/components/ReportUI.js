import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Text, Button } from 'samespace-zen'

import ReportActivityButton from './ReportActivityButton';
import { useQuery, gql } from "@apollo/client";
import ApolloClientProvider from '../ApolloClientProvider';

const REPORT_USER_DATA = gql`
query Query($query: QueryModifier!) {
    insightReport(query: $query)
  }
`

const REPORT_USERS_NAME = gql`
query Query($userIds: [String!]!) {
  getPeopleList(userIds: $userIds)
}
`

const ReportUI = () => {
    const [userData, setUserData] = useState(null);
    const [userName, setUserName] = useState(null);

    const { loading, error, data } = useQuery(REPORT_USER_DATA, {
        variables: {
            "query": {
                "start": "2021-11-01T12:15:53.681Z",
                "end": "2021-11-02T12:15:53.681Z"
            }
        }
    })

    useEffect(() => {
        setUserData(data?.insightReport?.report)
    }, [data]);
    console.log("All report data 1", userData);

    const { loading: loadingU, error: errorU, data: dataU } = useQuery(REPORT_USERS_NAME, {
        variables: {
            "userIds": [
                "347681617423662200",
                "347681617423662600",
                "347681617423662700",
                "347681617423662800",
                "347681617423662900",
                "347681617423662903",
                "347681617423662904",
                "347681617423662911"
            ]
        },
        client: ApolloClientProvider._instance.userClient
    })
    useEffect(() => {
        setUserName(dataU?.getPeopleList)
    }, [dataU]);
    console.log("report username 2", userName);

    const [uniqueId, setUniqueId] = useState(null)
    return (
        <>
            <article>
                <Table className="table-auto">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Text label="Users" />
                            </TableCell>
                            <TableCell>
                                <Text label="Worked Time" />
                            </TableCell>
                            <TableCell>
                                <Text label="Productivity" />
                            </TableCell>
                            <TableCell>
                                <Text label="View(%)" />
                            </TableCell>
                            <TableCell>
                                <Text label="Edit(%)" />
                            </TableCell>
                            <TableCell>
                                <Text label="Projects" />
                            </TableCell>
                            <TableCell>
                                <Text label="Billable Amt(USD)" />
                            </TableCell>
                            <TableCell>
                                <Text label="." />
                            </TableCell>

                        </TableRow>
                    </TableHead>

                    {/* Table Body */}
                    <TableBody className="">
                        {userData?.map((data, i) => {
                            return (
                                <div key={i} onMouseOver={() => setUniqueId(data.user_id)} onMouseOut={() => setUniqueId(null)} >
                                    <TableRow className="transition hover:bg-indigo-50 hover:pointer">
                                        <TableCell >
                                            <img src={data.avatar} alt={data.avatar} srcset="" />
                                            {

                                                userName.map((name, j) => i === j ? <Text label={`${name.first_name} ${name.last_name}`} /> : "")
                                            }

                                        </TableCell>
                                        <TableCell>
                                            <Text label={data.work_time} />
                                        </TableCell>
                                        <TableCell>
                                            <Text label={`${Math.round(data.productivity * 100)}%`} />
                                        </TableCell>
                                        <TableCell>
                                            <Text label={`${Math.round(data.view_percentage)}%`} />
                                        </TableCell>
                                        <TableCell>
                                            <Text label={`${Math.round(data.view_percentage)}%`} />
                                        </TableCell>
                                        <TableCell>
                                            <Text label={data.project_count} />
                                        </TableCell>
                                        <TableCell>
                                            <Text label={data.billable_amt} />
                                        </TableCell>
                                        <TableCell>
                                            {<ReportActivityButton opacity={uniqueId === data.user_id ? "opacity-100" : "opacity-0"} />}
                                        </TableCell>
                                    </TableRow>
                                </div>
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </article>
        </>
    )
}

export default ReportUI