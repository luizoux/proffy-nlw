import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/37673651?s=460&u=57b8c1a9048fc9a29c1e36b68939a40d2a66c370&v=4" alt="Luiza" />
                <div>
                    <strong>Luiza R. Marinho</strong>
                    <span>Programming</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam at urna sit amet diam blandit sapien.
            </p>

            <footer>
                <p>
                    Price/time
                    <strong>R$ 80</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Contact
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;