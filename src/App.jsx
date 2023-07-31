import React, { useState } from 'react';
import './App.css';
import UMG from './assets/UMG.png';
import USAC from './assets/USAC.png';
import Tarjeta from './components/tarjeta';
import LANDIVAR from './assets/LANDIVAR.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Contador } from './components/Contador';

function App() {
  const [isContadorVisible, setIsContadorVisible] = useState(false);

  const handleShowContador = () => {
    setIsContadorVisible(true);
  };

  const handleHideContador = () => {
    setIsContadorVisible(false);
  };

  return (
    <div className='App'>
      <Router>
        <header>
          <nav>
            {/* Agrega la clase "nav-link" a los enlaces y controla su visibilidad con los estados */}
            <Link
              to='/Contador'
              className={`nav-link ${isContadorVisible ? 'active' : ''}`}
              onClick={handleShowContador}
            >
              Contador
            </Link>
            <Link
              to='/App'
              className={`nav-link ${!isContadorVisible ? 'active' : ''}`}
              onClick={handleHideContador}
            >
              Universidades
            </Link>
          </nav>
        </header>

        <Routes>
          <Route path='/Contador' element={<Contador />} />
          {/* Si `isContadorVisible` es false, muestra el contenido */}
          {!isContadorVisible && (
            <Route
              path='/App'
              element={
                <div className='contenedor-principal'>
                  <div className=''>
                    <Tarjeta
                      imagen={UMG}
                      titulo={'UNIVERSIDAD MARIANO GALVEZ COATEPEQUE'}
                      descripcion={
                        'La Universidad Mariano Gálvez de Guatemala es una universidad privada en Guatemala. Su nombre hace referencia al prócer y preclaro jurisconsulto Doctor José Mariano Gálvez (Jefe del Estado de Guatemala entre 1831 y 1838), fundador de la Academia de Estudios y reformador de la educación guatemalteca, quien promovió importantes innovaciones en todos los órdenes de la vida del Estado. Luchó por que la enseñanza fuera laica, fue fundador de la Biblioteca y Museo Nacional, respetó las leyes y garantías individuales, libertad de prensa y emisión del pensamiento.'
                      }
                    />
                    <Tarjeta
                      imagen={USAC}
                      titulo={'UNIVERSIDAD SAN CARLOS DE GUATEMALA'}
                      descripcion={
                        'La mayor parte de Estudiantes que empiezan una carrera Universitaria, que lleva varios años o en todo caso que esta a un paso de ser un Profesional egresado de nuestra Alma Mater, desconoce el significado del Escudo que identifica a la Tricentenaria Universidad de San Carlos de Guatemala es por ello que a continuación se describen algunos de sus Escudos, los cuales se han venido sucediendo seglarmente para testimoniar su significado, y con el único objetivo de dar a conocer a la comunidad Universitaria estos breves fragmentos históricos de nuestra gloriosa Universidad de San Carlos.'
                      }
                    />
                    <Tarjeta
                      imagen={LANDIVAR}
                      titulo={'UNIVERSIDAD RAFAEL LANDIVAR'}
                      descripcion={
                        'La Universidad Rafael Landívar (URL) es una universidad católica privada de Guatemala, fundada en 1961, nombrada en honor al poeta guatemalteco Rafael Landívar, S.J. y que forma parte de la Asociación de Universidades Confiadas a la Compañía de Jesús en América Latina (AUSJAL). Tiene sedes en todas las regiones de Guatemala. El primer rector fue el licenciado José Falla Arís quien fue electo el 17 de noviembre de 1961. El 22 de enero de 1962 se iniciaron las primeras clases en las instalaciones del Liceo Guatemala con 138 estudiantes distribuidos en tres facultades: Ciencias Económicas y Empresariales, Ciencias Jurídicas y Sociales, y Humanidades.'
                      }
                    />
                  </div>
                </div>
              }
            />





            
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
