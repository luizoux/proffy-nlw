import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="How amazing that you want to teach!"
                description="The first step is to fill out the registration form."
            />
            <main>
                <fieldset>
                    <legend>Your Information</legend>
                    <div className="input-block">
                        <Input name="name" label="Full Name" />
                        <Input name="avatar" label="Avatar" />
                        <Input name="whatsapp" label="Whatsapp" />
                        <TextArea name="bio" label="Bio" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>About the class</legend>
                    <div className="input-block">
                        <Select
                            name="subject"
                            label="Subject"
                            options={[
                                { value: 'Art', label: 'Art' },
                                { value: 'Science', label: 'Science' },
                                { value: 'English', label: 'English' },
                                { value: 'Biology', label: 'Biology' },
                            ]}
                        />
                        <Input name="cost" label="Cost" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        Available Times 
                        <button type="button" onClick={addNewScheduleItem}> + New Time </button>
                    </legend>
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week-day"
                                    label="Week Day"
                                    options={[
                                        { value: '0', label: 'Sunday' },
                                        { value: '1', label: 'Monday' },
                                        { value: '2', label: 'Tuesday' },
                                        { value: '3', label: 'Wednesday' },
                                        { value: '4', label: 'Thursday' },
                                        { value: '5', label: 'Friday' },
                                        { value: '6', label: 'Saturday ' },
                                    ]}
                                />
                                <Input name="from" label="From" type="time" />
                                <Input name="to" label="To" type="time" />
                            </div>
                        )
                    })}
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Warning" />
                        Important! <br />
                        Fill in all your information
                    </p>
                    <button type="button">Save Registration</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;