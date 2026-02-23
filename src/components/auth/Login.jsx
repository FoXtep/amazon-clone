import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LoginContainer, Form, Input, Button, ErrorMessage, SignupLink } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const result = login(email, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <Button type="submit">Sign In</Button>

        <SignupLink>
          Don't have an account? <Link to="/signup">Create one</Link>
        </SignupLink>

        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px', fontSize: '12px' }}>
          <strong>Demo Credentials:</strong>
          <p>Email: demo@example.com</p>
          <p>Password: demo123</p>
          <p style={{ marginTop: '10px' }}>Or create a new account</p>
        </div>
      </Form>
    </LoginContainer>
  );
};

export default Login;
