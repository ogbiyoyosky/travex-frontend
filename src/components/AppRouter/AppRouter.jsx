import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'components';
import ProtectedRoute from 'components/ProtectedRoute';

const Home = lazy(() => import('screens/Home'));
const NotFound = lazy(() => import('screens/NotFound'));
const Login = lazy(() => import('screens/Login'));
const Register = lazy(() => import('screens/Register'));
const Listings = lazy(() => import('screens/Listings'));
const ListingDetails = lazy(() => import('screens/Listings/ListingDetails'));
const MyListings = lazy(() => import('screens/Listings/MyListings'));
const CreateListing = lazy(() => import('screens/Listings/CreateListing'));
const Dashboard = lazy(() => import('screens/Listings/Dashboard'));

export default function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/listings/:locationType" index element={<Listings />} />
          <Route
            path="/listings/:locationType/:id"
            element={
              <ProtectedRoute>
                <ListingDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-listings"
            element={
              <ProtectedRoute>
                <MyListings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-listing"
            element={
              <ProtectedRoute>
                <CreateListing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
