import React, { useState } from 'react';
import settingPre from '../images-assets/setting.svg'
import { Text, Select, Button, Input } from 'samespace-zen';
import reminder from '../images-assets/reminderAdd.svg';
import RightSidebar from './RightSidebar';
import moment from 'moment-timezone';
import {Formik, Form , Field} from 'formik';
import * as yup from 'yup';

const timeZones = moment.tz.names();
export const timezoneOptions = timeZones.map((timeZone) => {
  return {
    label: timeZone,
    value: timeZone,
  };
});

const Setting = () => {

  const formInitialSchema = {
    minHours : ""     
  }

  const formValidationSchema = yup.object().shape({
    minHours: yup
    .number("Must be number")
    .required("Is required")
    .max(10)
    .min(1)
  })

  const [visible, setVisible] = useState(false);
  const [timezone, setTimezone] = useState(null)
  const [minHours,setMinHours] = useState(1)
  const [weekDay, setWeekDay] = useState(null)
  const [timeFormat, setTimeFormat] = useState(null)

  return (
    <>
      <div className=" max-w-[400px] mx-auto w-full flex flex-col justify-center lg:space-y-3 sm:space-y-1 mt-10">
        <div className="flex border-b-2 border-black pb-4"> <img className="mr-4" src={settingPre} alt="" srcset="" /><Text label="Preferences" weight="bold" /></div>


        <Text label="Time Settings" weight="bold" />
        <div className="space-y-6">
          <Select
            clearable
            label="Time Zone"
            maxMenuHeight={150}
            menuPlacement="bottom"
            onChange={(e) => setTimezone(e.target.value)}
            options={timezoneOptions}
            value={timezone}
          />


          <Select
            clearable
            label="First day of week"
            maxMenuHeight={150}
            menuPlacement="bottom"
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              {
                label: 'Monday',
                value: 'Monday'
              },
              {
                label: 'Sunday',
                value: 'Sunday'
              }
            ]}
            value={weekDay}
          />


          <div className=" w-full grid grid-cols-1 gap-6 lg:grid-cols-2">

            <Select
              className="w-full"
              clearable
              label="Time format"
              maxMenuHeight={150}
              menuPlacement="bottom"
              onChange={(e) => setTimeFormat(e.target.value)}
              options={[
                {
                  label: '12 hours',
                  value: '12 hours'
                },
                {
                  label: '24 hours',
                  value: '24 hours'
                }
              ]}
              value={timeFormat}
            />

            


              
              <Formik initialValues={formInitialSchema} 
              validationSchema={formValidationSchema} 
              >
            
                
                {/* {console.log(minHours)} */}
                 <Input 
              className="w-full"
              onChange={(e) => setMinHours(e.target.value)}
              value={minHours}
              name="minHours"
              label="Min.hours in clock"
              type="number"
              size="small"
              suffix="Hrs"
              placeholder="hrs"
              autoSize="True" />
                

              

              
              {/* <Field className="w-full" type="number" name="minHours" placeholder="Hrs" min="1" max="10"></Field> */}
              </Formik>







          </div>
        </div>


        <div className="space-y-3">
          <Text className="mt-12" label="Reminders" weight="bold" />

          <p className="text-sm border-2 border-opacity-50  border-gray-200 rounded p-3">If <span className="text-indigo-600">Engineering</span> team tracked <span className="text-indigo-600">less than 7 hours</span> by the <span className="text-indigo-600">end of the day,</span> send them a reminder</p>
          <p className="text-sm border-2 border-opacity-50 border-gray-200 rounded p-3">If <span className="text-indigo-600">any user</span> spent <span className="text-indigo-600">more than 1 hour</span> on <span className="text-indigo-600">entertainment</span> site in a day, send them a reminder</p>

          <div className="flex items-center">
            <img onClick={() => { setVisible(true) }} className="m-2 cursor-pointer" src={reminder} alt="" /> <Text label="Reminder" color="primary"></Text>
            <RightSidebar show={visible ? true : false} setVisible={setVisible} />
          </div>
        </div>
      </div>

      {/* <div className="space-y-10 p-10">
        <div>


          {/* <Button
            onClick={() => { setVisible(true) }}
            title="Open Sidebar"
          /> */}
      {/* <RightSidebar show={visible  ? true : false} setVisible={setVisible} />
        </div>
      </div> */}

    </>
  )
}

export default Setting;



