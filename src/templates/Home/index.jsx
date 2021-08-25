/* eslint-disable prefer-template */
/* eslint-disable no-unneeded-ternary */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Base } from '../Base';
import { mapData } from '../../api/map-data';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : 'mitologia-nordica';

    const load = async () => {
      try {
        const data = await fetch(
          'https://norse-mythology-project.herokuapp.com/pages/?slug=' + slug,
        );
        const dataJson = await data.json();
        const pageData = mapData(dataJson);
        setData(pageData[0]);
      } catch (e) {
        console.log(e);
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    document.title = 'Página não encontrada';
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml } = data;

  const {
    links, text, link, srcImg, slug, 
  } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }

        return 1;
      })}
    </Base>
  );
}

export default Home;
