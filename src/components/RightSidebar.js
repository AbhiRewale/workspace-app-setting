import React, { useState,useEffect } from 'react'
import { Button, Sidebar, Input, Select, Text } from 'samespace-zen';
import { useQuery, gql,useLazyQuery } from "@apollo/client";

const GET_TEAMS = gql`
query{
    getTeams {
      name
      id
    }
  }
`

const GET_USERS = gql`
query{
    getUsers {
      team {
        name
        users
      }
    }
  }
`

const GET_PROJECTS = gql`
query{
  getProjects {
    name
    _id
  }
}
`


const RightSidebar = ({ show, setVisible }) => {
  // const [loadTeams,{loadingTeams:loading,errorTeams:error,dataTeams:data}] = useQuery(GET_TEAMS)

  const {loadingUsers,errorUsers,dataUsers} = useQuery(GET_USERS)
  console.log('dataUsers',dataUsers)
  // const {loadingProjects,errorProjects,dataProjects} = useLazyQuery(GET_PROJECTS)
  

  const [entity, setEntity] = useState({label: 'Teams', value: 'teams'})
  const [entityOptions,setEntityOptions] = useState([])
  useEffect(()=>{
  // loadTeams()
  },[entity])


  return (

    <>


      {
        show === true ? (<Sidebar
          body={
            <div className="space-y-8">
              {/* <section className="grid grid-cols-2 gap-8">
                    <article><Select label="Entity" options={
                        data.getTeams.map((team)=>{
                            return {
                                label:team.name ,
                                value:team.id
                            }
                        })
                    }  placeholder="Engineer" /></article>

                    <article><Select label="User" options={
                        dataone.getUsers.mao
                    }/></article>
                    </section> */}

              <section className="grid grid-cols-2 gap-8">
                <article>
                  <Select label="Entity" options={[{ label: 'Teams', value: 'teams' }, { label: 'Users', value: 'users' }, { label: 'Projects', value: 'projects' }]}
                    onChange={(e) => {
                      setEntity(e.target.value)
                    }}
                    placeholder="Team" />
                </article>
                
                {console.log("Entity 1",entity)}

                {/* <article><Select label="Teams" options={[{ label: 'Sales', value: 'sales' }, { label: 'Marketing', value: 'marketing' }, { label: 'Tech', value: 'tech' }, { label: 'Projects', value: 'projects' }]} placeholder="Engineer" /></article> */}
                <article>
                <Select 
                label={entity.label} 
                options={
                  entityOptions.map((item,i) => {
                  return {
                    value: item.id,
                    label: item.name,
                  }
                })
                } placeholder="Engineer" /></article>
              </section>

              <section className="grid grid-cols-1 gap-8">
                <article><Select label="Trigger" options={[{ label: 'Sales', value: 'sales' }, { label: 'Marketing', value: 'marketing' }, { isDisabled: true, label: 'Helpdesk', value: 'helpdesk' }, { label: 'Tech', value: 'tech' }, { label: 'Operations', value: 'ops' }]} placeholder="Time Tracked" /></article>
              </section>

              <section className="grid grid-cols-2 gap-8">
                <article><Select label="Less than " options={[{ label: 'Sales', value: 'sales' }, { label: 'Marketing', value: 'marketing' }, { isDisabled: true, label: 'Helpdesk', value: 'helpdesk' }, { label: 'Tech', value: 'tech' }, { label: 'Operations', value: 'ops' }]} placeholder="40 hours" /></article>
                <article><Select label="By the end of the" options={[{ label: 'Sales', value: 'sales' }, { label: 'Marketing', value: 'marketing' }, { isDisabled: true, label: 'Helpdesk', value: 'helpdesk' }, { label: 'Tech', value: 'tech' }, { label: 'Operations', value: 'ops' }]} placeholder="Week" /></article>
              </section>

              <Text label="Send them a reminder" weight="semibold" size="sm" />
            </div>}
          footer={<div className="flex justify-end"><div className="w-60 grid grid-cols-2 gap-4"><Button size="xsmall" shape="rounded" accent="contrast" title="Cancel" type="muted" /><Button size="xsmall" shape="rounded" accent="primary" title="Done" /></div></div>}
          header="Create Reminders"
          onClose={() => { setVisible(false) }}
          show
          width={0}
        />) : ""
      }


    </>
  )
}

export default RightSidebar
