import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Form from '../../components/Form/Form';


export default function player(props) {
  const router = useRouter();

  const [{ value }, setInput] = useState({
    // value: 'PJP8LJUJP'
    value: ''
  });
  const [{ error }, setError] = useState({});

  useEffect(() => {
    setError(props);
    router.push('/player');
  }, []);

  const handleChange = ({ target: { value } }) => {
    if (value.length > 12) return;

    setInput({
      value: value.toUpperCase()
    });
  }
  const handleHideAlert = () => {
    setError({ error: '' });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleHideAlert();

    if (value < 1) {
      setError({ error: 'Enter tag!' });
      router.push('/player');
      return;
    }

    const updatevalue = `#${value}`;

    router.push({
      pathname: '/player/id',
      query: { id: updatevalue },
    });
  }

  return (
    <div>
      <Head>
        <title>Player Stats | Clash stats</title>
      </Head>

      <Form
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleHideAlert={handleHideAlert}
        error={error}
      />

      <footer>
        <Link href="/player/id?id=%23PJP8LJUJP">
          <a>tymino</a>
        </Link>
      </footer>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  return {
    props: query
  };
}