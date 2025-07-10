import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('/api/courses').then((res) => setCourses(res.data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <ul>
                {courses.map(course => (
                    <li key={course._id} className="p-2 border-b">{course.title} - ${course.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
//