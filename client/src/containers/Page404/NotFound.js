import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { PATH_NAME } from '../../utils';

const NotFound = () => <Redirect to={PATH_NAME.ADMIN} />

export default NotFound;