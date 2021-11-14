import React, { useState,useEffect } from 'react'
import { Button, Sidebar, Input, Select, Text } from 'samespace-zen';
import { useQuery, gql,useLazyQuery } from "@apollo/client";

const GET_OPTIONS_DATA = gql`
query{ 
  getUsers {
      userId
   }
    getTeams {
      name
      _id
    }
   getProjects {
     name
     _id
   }

}
`

const RightSidebar = ({ show, setVisible }) => {
  
  const {loading, error,data} = useQuery(GET_OPTIONS_DATA)
  const [teams, setTeams]=useState()

    console.log("RightSidbar Data",data );

  

  const [entity, setEntity] = useState({label: 'Teams', value: 'teams'})
  const [entityOptions,setEntityOptions] = useState([])

  useEffect(()=>{
    setTeams({data})
  if(entity.label === 'Projects'){
    return setEntityOptions(teams?.data?.getProjects)
  }
  else if(entity.label === 'Users'){
    return setEntityOptions(teams?.data?.getUsers)
  }
  else {
    return setEntityOptions(teams?.data?.getTeams)
  }
  
  },[entity])

  

  return (

    <>
    {
        show === true ? (<Sidebar
          body={
            <div className="space-y-8">
              

              <section className="grid grid-cols-2 gap-8">
                <article>
                  <Select label="Entity" options={[{ label: 'Teams', value: 'teams' }, { label: 'Users', value: 'users' }, { label: 'Projects', value: 'projects' }]}
                    onChange={(e) => {
                      setEntity(e.target.value)
                    }}
                    placeholder="Team" />
                </article>
                
                <article>
                <Select 
                label={entity.label} 
                options={
                    entityOptions?.map((item,i) => {
                    return {
                      value: item._id,
                      label: item.name
                    }
                  })
                } 
                placeholder={entity.label} 
                />
                </article>
               
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
