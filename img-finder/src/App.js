import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./header.css";
import "./content.css";
import "./article.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const open = (url) => window.open(url);

  console.log(photos);
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            setLoading(true);
            // TODO Hacer llamado a la api de unsplash.
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=25&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID Q6pIVUvog9L-sqODvu_QMES42gSpIm4qXXFlObafvw8",
                },
              }
            );
            const data = await response.json();
            setPhotos(data.results);
            setLoading(false);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {loading ? <h1>Loading...</h1> : null}
          {photos.map((photo) => (
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} alt="any" />
              <p>{[photo.description, photo.alt_description].join("-")}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
