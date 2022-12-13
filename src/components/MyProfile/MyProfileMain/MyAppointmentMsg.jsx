import React from 'react';
import { useForm } from 'react-hook-form';
import { Tooltip } from '@mui/material';
import userIcon from '../../../images/icons/user.png';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';

const MyAppointmentMsg = ({ appointment }) => {
    const { register, handleSubmit, reset, formState } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/api/v1/SentAppointmentMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                appointmentId: appointment._id,
                message: data.message,
                sender: 'patient',
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ message: '' });
        }
    }, [formState, reset]);

    return (
        <div className="">
            <div style={{ height: '250px' }} className="overflow-auto">
                {appointment.message.map((msg) => (
                    <div key={msg.time} className="">
                        {msg.sender === 'doctor' && (
                            <div className="d-flex align-items-center">
                                <Tooltip title={appointment.doctorName}>
                                    <img
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                        className="rounded-circle border border-primary"
                                        src={appointment.doctorProfilePic}
                                        alt=""
                                    />
                                </Tooltip>
                                <BiCaretRight />
                                <p
                                    style={{
                                        backgroundColor: '#E4E6EB',
                                    }}
                                    className="py-1 px-2 rounded mb-1"
                                >
                                    {msg.message}
                                </p>
                            </div>
                        )}
                        {msg.sender === 'patient' && (
                            <div className="d-flex flex-row-reverse align-items-center">
                                <Tooltip title={appointment.patientName}>
                                    <img
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                        className="rounded-circle border border-primary"
                                        src={userIcon}
                                        alt=""
                                    />
                                </Tooltip>
                                <BiCaretLeft />
                                <p
                                    style={{
                                        backgroundColor: '#E4E6EB',
                                    }}
                                    className="py-1 px-2 rounded mb-1"
                                >
                                    {msg.message}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="message-send mt-3">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
                    <input
                        {...register('message', {
                            required: true,
                        })}
                        placeholder="Type a message..."
                        className="form-control"
                        type="text"
                    />
                    <button type="submit" className="btn btn-primary">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MyAppointmentMsg;
