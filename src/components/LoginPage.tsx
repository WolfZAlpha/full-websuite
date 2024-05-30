import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import styles from '../styles/LoginPage.module.css';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    arbitrumWallet: ''
  });
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setShowForm(window.innerWidth >= 576);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isSignUp ? '/api/register' : '/api/login';
    try {
      const response = await axios.post(endpoint, formData);
      if (response.status === 200) {
        onLogin();
        router.push('/desktop');
      }
    } catch (error: any) {
      setError(error.response ? error.response.data.error : 'Server error');
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={`${styles.loginPageContainer} flex items-center justify-start min-h-screen`}>
      <Container fluid className="flex items-center justify-start w-full h-full pl-10">
        <Row className={`w-full ${showForm ? '' : 'hidden'}`}>
          <Col md={6} className={`${styles.box} bg-transparent p-6 rounded-lg shadow-lg text-white max-w-lg`}>
            <div className="p-2 d-flex flex-column align-items-center mx-auto w-100">
              {!isSignUp ? (
                <>
                  <h2 className="text-uppercase text-center font-bold mb-2">Login</h2>
                  <p className="text-center text-white-50 mb-2">Please enter your login and password!</p>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit} className="w-100">
                    <Form.Group className="mb-2">
                      <Form.Label>Email address or Username</Form.Label>
                      <Form.Control type="text" placeholder="Enter email or username" name="emailOrUsername" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                    </Form.Group>
                    <p className="text-center text-white-50 mb-2"><a href="#!" className="text-white-50">Forgot password?</a></p>
                    <Button type="submit" className="w-100 bg-black text-white rounded-full border-none">Login</Button>
                  </Form>
                  <div className="d-flex flex-row mt-2 mb-2 justify-content-center">
                    <a className="text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/auth/twitter" className="w-100 mt-2 bg-black text-white rounded-full border-none">Login with Twitter</a>
                  </div>
                  <div>
                    <p className="text-center mb-0 text-white-50">Don't have an account? <a href="#!" className="font-bold text-white-50" onClick={toggleSignUp}>Sign Up</a></p>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-uppercase text-center font-bold mb-2">Sign Up</h2>
                  <p className="text-center text-white-50 mb-2">Please enter your details to create an account!</p>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit} className="w-100">
                    <Form.Group className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Arbitrum Wallet</Form.Label>
                      <Form.Control type="text" placeholder="Arbitrum Wallet" name="arbitrumWallet" value={formData.arbitrumWallet} onChange={handleChange} required />
                    </Form.Group>
                    <Button type="submit" className="w-100 bg-black text-white rounded-full border-none">Sign Up</Button>
                  </Form>
                  <div className="d-flex flex-row mt-2 mb-2 justify-content-center">
                    <a className="text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/auth/twitter" className="w-100 mt-2 bg-black text-white rounded-full border-none">Sign Up with Twitter</a>
                  </div>
                  <div>
                    <p className="text-center mb-0 text-white-50">Already have an account? <a href="#!" className="font-bold text-white-50" onClick={toggleSignUp}>Log In</a></p>
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
        <Button className={`fixed bottom-5 right-5 w-12 h-12 bg-black text-white text-2xl rounded-full ${styles.toggleFormBtn}`} onClick={toggleFormVisibility}>
          <i className="fas fa-arrow-up"></i>
        </Button>
      </Container>
    </div>
  );
};

export default LoginPage;
