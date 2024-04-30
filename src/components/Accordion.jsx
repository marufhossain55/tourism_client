const Accordion = () => {
  return (
    <div className='lg:w-[50%] w-[90%]  container mx-auto mt-32'>
      <div className='collapse collapse-plus bg-base-200'>
        <input type='radio' name='my-accordion-3' defaultChecked />
        <div className='collapse-title text-xl font-medium'>
          Luxury Within Reach: Budget-Friendly Tours with Uncompromised Comfort!
        </div>
        <div className='collapse-content'>
          <p>
            Experience the epitome of luxury travel without the hefty price tag.
            Our budget-friendly tours promise a seamless blend of affordability
            and comfort, ensuring you indulge in opulence without emptying your
            wallet. From lavish accommodations to exquisite dining experiences,
            every aspect of your journey is designed to exceed your
            expectations.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-200'>
        <input type='radio' name='my-accordion-3' />
        <div className='collapse-title text-xl font-medium'>
          Affordable Adventures: Reliable Tours for the Budget-Conscious
          Explorer!
        </div>
        <div className='collapse-content'>
          <p>
            Set off on exciting adventures without worrying about unexpected
            expenses. Our reliable tours cater to the budget-conscious traveler,
            offering unbeatable value without sacrificing quality or peace of
            mind. With meticulously planned itineraries and expert guides, you
            can explore the world confidently, knowing you're getting the best
            bang for your buck.
          </p>
        </div>
      </div>
      <div className='collapse collapse-plus bg-base-200'>
        <input type='radio' name='my-accordion-3' />
        <div className='collapse-title text-xl font-medium'>
          Dream Destinations, Real Savings: Pocket-Friendly Tours for Every
          Traveler!
        </div>
        <div className='collapse-content'>
          <p>
            Fulfill your wanderlust without draining your savings account. Our
            pocket-friendly tours make dream destinations a reality for every
            traveler, delivering unforgettable experiences at prices that won't
            break the bank. Whether you're craving cultural immersion, thrilling
            adventures, or serene escapes, our affordable packages ensure you
            get the most out of your travel budget.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
