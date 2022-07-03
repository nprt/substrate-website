import cx from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Icon from '../../../default/Icon';
import { Link } from '../../../default/Link';
import CaseStudyButton from '../teams/CaseStudyButton';

const createExcerpt = (string, length) => {
  if (string.length < length) return string;
  else return string.substring(0, length) + '...';
};

export default function ProjectCard({ model }) {
  const {
    node: {
      frontmatter,
      html,
      fields: { slug },
    },
  } = model;
  const { title, description, featured_image, category, link } = frontmatter;
  const image = getImage(featured_image);
  return (
    <div
      className={cx(
        'group mb-6 lg:mb-0 px-10 py-6 bg-white dark:bg-darkBackground animate-fade-in w-full',
        `border border-substrateDark dark:border-substrateGray-light border-opacity-10 dark:border-opacity-10`,
        'duration-75 ease-in-out hover:scale-105 hover:border hover:shadow-xl'
      )}
    >
      <div className="mb-6">
        <Link className="inline-block" to={link}>
          <div className="flex items-center">
            <div className="text-2xl font-bold">{title}</div>
            <Icon
              name="external-link"
              className="lg:hidden group-hover:block h-4 w-4 ml-4 mt-0.5 fill-current text-substrateGreen animate-fade-in duration-75"
            />
          </div>
        </Link>
        <div className="text-sm">
          {category.map((name, index) => {
            return (
              <span key={index}>
                {index > 0 && ', '} {name}
              </span>
            );
          })}
        </div>
      </div>
      <GatsbyImage
        className="h-[110px] w-[110px] p-0.5 object-contain mb-6 dark:bg-gray-300 rounded-full"
        image={image}
        alt={`${title} Project Logo`}
      />
      <p className="mb-10 h-[78px]">{createExcerpt(description, 260)}</p>
      {html && <CaseStudyButton link={`${slug}/#case-study`} />}
    </div>
  );
}
