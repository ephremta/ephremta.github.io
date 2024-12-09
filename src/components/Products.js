import React from 'react';
import '../styles/components/Products.css';

const Products = () => {
  const products = [
    {
      title: 'Credit Scoring Service',
      description:
        'Accurately assess creditworthiness with our AI-powered tools.',
      icon: 'icon-path-1.png',
      link: '#credit-scoring',
      category: 'Credit Scoring'
    },
    {
      title: 'Loan Underwriting Service',
      description: 'Simplify and optimize your underwriting process.',
      icon: 'icon-path-2.png',
      link: '#loan-underwriting',
      category: 'Loan Underwriting'
    },
    {
      title: 'Intelligent Analytics Hub',
      description: 'Gain actionable insights into customer behaviors.',
      icon: 'icon-path-3.png',
      link: '#intelligent-analytics',
      category: 'Analytics'
    },
    {
      title: 'Advanced Credit Scoring',
      description: 'Deep dive into credit scoring with enhanced models.',
      icon: 'icon-path-1.png',
      link: '#advanced-credit-scoring',
      category: 'Credit Scoring'
    },
    {
      title: 'Automated Loan Underwriting',
      description: 'Automate underwriting decisions with advanced algorithms.',
      icon: 'icon-path-2.png',
      link: '#automated-loan-underwriting',
      category: 'Loan Underwriting'
    },
    {
      title: 'Behavioral Analytics',
      description: 'Unlock deep insights into customer behavior trends.',
      icon: 'icon-path-3.png',
      link: '#behavioral-analytics',
      category: 'Analytics'
    }
  ];

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className='products'>
      <h2>
        Comprehensive AI-driven Credit Risk Decisioning and Analytics Solutions
      </h2>
      <div className='product-categories'>
        {Object.keys(groupedProducts).map((category, index) => (
          <div className='product-category' key={index}>
            <h3>{category}</h3>
            <div className='products-list'>
              {groupedProducts[category].map((product, index) => (
                <div
                  className='product-card'
                  key={index}
                  aria-labelledby={product.title}
                >
                  <img
                    src={product.icon}
                    alt={`${product.title} icon`}
                    aria-hidden='true'
                  />
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <a href={product.link}>
                    <button>Learn More</button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
