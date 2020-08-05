import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id 
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.avatar} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Price/time
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a 
                    onClick={createNewConnection}
                    href={`https://ws.me/${teacher.whatsapp}`}
                    target="_blank">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Contact
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;