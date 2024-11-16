import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import clientServices from './services/clients';
import dogServices from './services/dogs';
import appointmentServices from './services/appointments';
import './App.css'; 
import Navbarr from './components/Navbarr';
import Hero from './components/Hero';
import About from './components/about';
import Work from './components/trabajo';

const Heading = ({ text }) => <h2>{text}</h2>;

const Button = ({ type, text, handleClick }) => (
  <button type={type} onClick={handleClick}>{text}</button>
);

const ClientForm = ({ onSubmit, newClient, handleNameChange, handlePhoneChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      Nombre del cliente: <input type="text" value={newClient.name} onChange={handleNameChange} />
    </div>
    <div>
      Teléfono: <input type="text" value={newClient.phone} onChange={handlePhoneChange} />
    </div>
    <Button text="Añadir Cliente" type="submit" />
  </form>
);

const DogForm = ({ onSubmit, newDog, handleDogNameChange, handleBreedChange, handleAgeChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      Nombre del perro: <input type="text" value={newDog.name} onChange={handleDogNameChange} />
    </div>
    <div>
      Raza: <input type="text" value={newDog.breed} onChange={handleBreedChange} />
    </div>
    <div>
      Edad: <input type="number" value={newDog.age} onChange={handleAgeChange} />
    </div>
    <Button text="Añadir Perro" type="submit" />
  </form>
);

const AppointmentForm = ({ onSubmit, clients, dogs, newAppointment, handleDateChange, handleTimeChange, handleClientChange, handleDogChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      Cliente:
      <select value={newAppointment.clientId} onChange={handleClientChange}>
        {clients.map(client => (
          <option key={client.id} value={client.id}>{client.name}</option>
        ))}
      </select>
    </div>
    <div>
      Perro:
      <select value={newAppointment.dogId} onChange={handleDogChange}>
        {dogs.map(dog => (
          <option key={dog.id} value={dog.id}>{dog.name}</option>
        ))}
      </select>
    </div>
    <div>
      Fecha: <input type="date" value={newAppointment.date} onChange={handleDateChange} />
    </div>
    <div>
      Hora: <input type="time" value={newAppointment.time} onChange={handleTimeChange} />
    </div>
    <Button text="Agendar Turno" type="submit" />
  </form>
);

const Appointment = ({ appointment, clientName, dogName, date, time, onDelete }) => (
  <li>
    {clientName}'s perro {dogName} el {date} a las {time}
    <button onClick={() => onDelete(appointment.id)} className="delete-button">Eliminar</button>
  </li>
);


const Notification = ({ message }) => {
  if (!message) return null;
  return <div className="error">{message}</div>;
};

const App = () => {
  const [clients, setClients] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [newClient, setNewClient] = useState({ name: '', phone: '' });
  const [newDog, setNewDog] = useState({ name: '', breed: '', age: '' });
  const [newAppointment, setNewAppointment] = useState({ clientId: '', dogId: '', date: '', time: '' });
  const [message, setMessage] = useState('');


  useEffect(() => {
    clientServices.getAll().then(data => setClients(data));
    dogServices.getAll().then(data => setDogs(data));
    appointmentServices.getAll().then(data => setAppointments(data));
  }, []);

 
  const handleAddClient = event => {
    event.preventDefault();
    const client = { ...newClient };
    clientServices.create(client).then(returnedClient => {
      setClients(clients.concat(returnedClient));
      setNewClient({ name: '', phone: '' });
      setMessage(`Cliente añadido: ${client.name}`);
      setTimeout(() => setMessage(null), 5000);
    });
  };

  const handleAddDog = event => {
    event.preventDefault();
    const dog = { ...newDog };
    dogServices.create(dog).then(returnedDog => {
      setDogs(dogs.concat(returnedDog));
      setNewDog({ name: '', breed: '', age: '' });
      setMessage(`Perro añadido: ${dog.name}`);
      setTimeout(() => setMessage(null), 5000);
    });
  };

  const handleAddAppointment = event => {
    event.preventDefault();
    const appointment = { ...newAppointment };
    appointmentServices.create(appointment).then(returnedAppointment => {
      setAppointments(appointments.concat(returnedAppointment));
      setNewAppointment({ clientId: '', dogId: '', date: '', time: '' });
      setMessage(`Turno agendado para ${newAppointment.dogId}`);
      setTimeout(() => setMessage(null), 5000);
    });
  };

  const handleDeleteAppointment = (id) => {
    appointmentServices.delete(id).then(() => {

      setAppointments(appointments.filter(appointment => appointment.id !== id));
      setMessage('Turno eliminado correctamente');
      setTimeout(() => setMessage(null), 5000); 
    }).catch(error => {
      setMessage('Error al eliminar el turno');
      setTimeout(() => setMessage(null), 5000);
    });
  };
  
  const handleClientChange = event => setNewAppointment({ ...newAppointment, clientId: event.target.value });
  const handleDogChange = event => setNewAppointment({ ...newAppointment, dogId: event.target.value });
  const handleDateChange = event => setNewAppointment({ ...newAppointment, date: event.target.value });
  const handleTimeChange = event => setNewAppointment({ ...newAppointment, time: event.target.value });
  return (
    <Router>
      <Navbarr />
      <Notification message={message} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />

        <Route
          path="/clients"
          element={
            <div className="container">
              <Heading text="Añadir un Nuevo Cliente" />
              <ClientForm
                onSubmit={handleAddClient}
                newClient={newClient}
                handleNameChange={e => setNewClient({ ...newClient, name: e.target.value })}
                handlePhoneChange={e => setNewClient({ ...newClient, phone: e.target.value })}
              />
            </div>
          }
        />

        <Route
          path="/dogs"
          element={
            <div className="container">
              <Heading text="Añadir un Nuevo Perro" />
              <DogForm
                onSubmit={handleAddDog}
                newDog={newDog}
                handleDogNameChange={e => setNewDog({ ...newDog, name: e.target.value })}
                handleBreedChange={e => setNewDog({ ...newDog, breed: e.target.value })}
                handleAgeChange={e => setNewDog({ ...newDog, age: e.target.value })}
              />
            </div>
          }
        />
  <Route
    path="/appointments"
    element={
    <div className="container">
      <Heading text="Agendar un Nuevo Turno" />
      <AppointmentForm
        onSubmit={handleAddAppointment}
        clients={clients}
        dogs={dogs}
        newAppointment={newAppointment}
        handleDateChange={handleDateChange}
        handleTimeChange={handleTimeChange}
        handleClientChange={handleClientChange}
        handleDogChange={handleDogChange}
      />

      <Heading text="Turnos Agendados" />
      <ul>
        {appointments.map(appointment => {
        const client = clients.find(c => c.id === appointment.clientId);
        const dog = dogs.find(d => d.id === appointment.dogId);
        return (
          <Appointment
            key={appointment.id}
            clientName={client ? client.name : ''}
            dogName={dog ? dog.name : ''}
            date={appointment.date}
            time={appointment.time}
          />
        );
        })}
      </ul>
    </div>
  }
/>
      </Routes>
    </Router>
  );
};

export default App;
