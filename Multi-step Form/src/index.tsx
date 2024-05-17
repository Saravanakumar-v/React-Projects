import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersonalInfoFormComponent } from './form/personal-info-form-component';
import { UserPlanFormComponent } from './form/user-plan-form-component';
import { AddonFormComponent } from './form/addon-form-component';
import { FormSummaryComponent } from './form/form-summary-component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/personal-info",
        element: <PersonalInfoFormComponent/>
      },
      {
        path: "/user-plan",
        element: <UserPlanFormComponent/>
      },
      {
        path: "/add-on",
        element: <AddonFormComponent />
      },
      {
        path: "/payment-summary",
        element: <FormSummaryComponent/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
