import { AppBar, Tabs, Tab } from '@mui/material';
import MyAppBar from '../components/MyAppBar';
import Head from 'next/head';

export default function Page() {
    return (
          <Head>
            <style>
              {`
                body {
                  margin: 0;
                  padding: 0;
                  background-color: lightblue;
                }
              `}
            </style>
          </Head>
      );
}